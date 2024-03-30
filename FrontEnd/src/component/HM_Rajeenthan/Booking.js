//Hotel Booking React Native
//December 18, 2023
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Calendar } from 'react-native-calendars';

const HotelBooking = () => {
    const [name, setName] = useState('');
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState(1);
    const [roomOption, setRoomOption] = useState('single');
    const [location, setLocation] = useState('');
    const [coordinates, setCoordinates] = useState(null);
    const [selectedDates, setSelectedDates] = useState({});
    const [isCancelled, setIsCancelled] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [price, setPrice] = useState(0);
    const [currency, setCurrency] = useState('USD');
    const [convertedPrice, setConvertedPrice] = useState(null);

    
    const handleBooking = () => {
        // Handle the booking logic here
        console.log('Booking submitted!');
    };

    const handleGuestsChange = (value) => {
        setGuests(value);
    };

    const handleRoomOptionChange = (value) => {
        setRoomOption(value);
    };

    const handleSearch = async () => {
        // Perform location search logic here
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=YOUR_API_KEY`);
            const data = await response.json();

            if (data.results.length > 0) {
                const { lat, lng } = data.results[0].geometry.location;
                setCoordinates({ latitude: lat, longitude: lng });
            } else {
                console.log('Location not found');
            }
        } catch (error) {
            console.error('Error occurred during geocoding:', error);
        }
    };

    const handleDateSelect = (date) => {
        if (!checkInDate) {
            setCheckInDate(date.dateString);
        } else if (!checkOutDate) {
            setCheckOutDate(date.dateString);
        } else {
            setCheckInDate(date.dateString);
            setCheckOutDate('');
        }

        setSelectedDates((prevSelectedDates) => ({
            ...prevSelectedDates,
            [date.dateString]: {
                selected: true,
                selectedColor: 'blue',
            },
        }));
    };

    const handleCancelBooking = () => {
        // Implement cancellation logic here
        setIsCancelled(true);
    };

    const handleSearchQueryChange = (query) => {
        setSearchQuery(query);
    };

    useEffect(() => {
        handleSearch();
    }, [location]);

    useEffect(() => {
        
        // Calculate price based on selected dates and room option
        const calculatePrice = () => {
            // Define your pricing logic here
            let basePrice = 0;
            if (roomOption === 'single') {
                basePrice = 100;
            } else if (roomOption === 'double') {
                basePrice = 150;
            } else if (roomOption === 'suite') {
                basePrice = 200;
            }

            // Calculate the number of nights
            const startDate = new Date(checkInDate);
            const endDate = new Date(checkOutDate);
            const numberOfNights = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

            // Calculate the total price
            const totalPrice = basePrice * numberOfNights;

            setPrice(totalPrice);
        };

        calculatePrice();
    }, [checkInDate, checkOutDate, roomOption]);
    // Function to fetch currency conversion rates
    const fetchCurrencyConversion = async (baseCurrency, targetCurrency) => {
        try {
            //usd to sl rate
            const response = await fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}&symbols=${targetCurrency}`);
            const data = await response.json();
            return data.rates[targetCurrency];
        } catch (error) {
            console.error('Error occurred during currency conversion:', error);
            return null;
        }
    };

    useEffect(() => {
        const convertPrice = async () => {
            const conversionRate = await fetchCurrencyConversion('USD', currency);
            if (conversionRate) {
                const convertedPrice = price * conversionRate;
                setConvertedPrice(convertedPrice);
            }
        };

        convertPrice();
    }, [price, currency]);

    if (isCancelled) {
        return (
            <View>
                <Text>Your booking has been cancelled.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to the Hotel Booking Page!</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <Picker
                selectedValue={guests}
                onValueChange={handleGuestsChange}
            >
                <Picker.Item label="1 Guest" value={1} /> 
                <Picker.Item label="2 Guests" value={2} />
                <Picker.Item label="3 Guests" value={3} />
                <Picker.Item label="4 Guests" value={4} /> 
            </Picker>
            <Picker
                selectedValue={roomOption}
                onValueChange={handleRoomOptionChange}
            >
                <Picker.Item label="Single Room" value="single" />
                <Picker.Item label="Double Room" value="double" />
                <Picker.Item label="Suite" value="suite" />
            </Picker>
            <Calendar
                style={styles.calendar}
                onDayPress={handleDateSelect}
                markedDates={selectedDates}
            />
            <TextInput
                style={styles.input}
                placeholder="Check-in Date"
                value={checkInDate}
                onChangeText={setCheckInDate}
            />
            <TextInput
                style={styles.input}
                placeholder="Check-out Date"
                value={checkOutDate}
                onChangeText={setCheckOutDate}
            />
            <Button title="Book Now" onPress={handleBooking} />

            <Text style={styles.label}>Number of Guests:</Text>
            <Picker
                style={styles.input}
                selectedValue={guests}
                onValueChange={handleGuestsChange}
            >
                <Picker.Item label="1" value={1} />
                <Picker.Item label="2" value={2} />
                <Picker.Item label="3" value={3} />
                {/* Add more options as needed */}
            </Picker>

            <Text style={styles.label}>Room Option:</Text>
            <Picker
                style={styles.input}
                selectedValue={roomOption}
                onValueChange={handleRoomOptionChange}
            >
                <Picker.Item label="Single" value="single" />
                <Picker.Item label="Double" value="double" />
                <Picker.Item label="Suite" value="suite" />
                {/* Add more options as needed */}
            </Picker>

            <TextInput
                style={styles.input}
                placeholder="Enter location"
                value={location}
                onChangeText={setLocation}
            />
            <Button title="Search" onPress={handleSearch} />
            <TextInput
                style={styles.input}
                placeholder="Search"
                value={searchQuery}
                onChangeText={handleSearchQueryChange}
            />

            {coordinates && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: coordinates.latitude,
                        longitude: coordinates.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: coordinates.latitude,
                            longitude: coordinates.longitude,
                        }}
                        title="Selected Location"
                    />
                </MapView>
            )}
            <Calendar
                markedDates={selectedDates}
                onDayPress={handleDateSelect}
            />

            <Text style={styles.heading}>Booking Confirmation</Text>
            <Text style={styles.bookingDetails}>Booking Details: {name}, {checkInDate}, {checkOutDate}, {guests}, {roomOption}</Text>
            <Text>Price: {convertedPrice ? convertedPrice.toFixed(2) : price.toFixed(2)} {currency}</Text>
            <Button title="Book Now" onPress={handleBooking} />
            <Button title="Cancel Booking" onPress={handleCancelBooking} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    map: {
        flex: 1,
        height: 300,
        marginBottom: 10,
    },
    bookingDetails: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default HotelBooking;
