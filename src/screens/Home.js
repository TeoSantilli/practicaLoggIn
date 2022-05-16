import React, {Component} from 'react'
import {View, Text, TouchableOpacity, FlatList, ActivityIndicator, Image, StyleSheet} from 'react-native'

class Home extends Component{
    constructor(){
        super()
        this.state={
            alumnos: [
                {
                    id:1,
                    nombre: 'Ale'
                },
                {
                    id:2,
                    nombre: 'Brian'
                },
                {
                    id:3,
                    nombre: 'Teo'
                },
                {
                    id:4,
                    nombre: 'Nicole'
                },
                {
                    id:5,
                    nombre: 'Joaco'
                }
            ]
        }
    }

    render(){
        return(
            <View style={style.container}>
                <Text>Probando Flatlist, Image y Activity Indicator</Text>
                <ActivityIndicator 
                    size='large'
                    color='red'
                />

                <Image 
                    source={require('../../assets/favicon.png')}
                    resizeMode='center'
                    style={style.image}
                    

                />

                <FlatList 
                    data={this.state.alumnos}
                    keyExtractor={alumno => alumno.id.toString()}
                    renderItem = {({item})=> <Text>El nombre del alumno es: {item.nombre}</Text>}
                />
            </View>
        )
    }

    

}

const style = StyleSheet.create({
    image:{
        height: 100,
    },
})


export default Home
