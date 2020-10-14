import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tugas12 from './tugas/tugas12/App'
import Tugas13 from './tugas/tugas13/App'
import Materi3 from './materi/m3/index'

export default function App() {
    return (
            <Tugas13 />


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
