import React, {Component} from 'react'
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

class Login extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:'',
        }
    }

    onSubmit(){
        console.log(this.state);
    }

    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.title}>Login</Text>

                <TextInput 
                style={styles.inputs} 
                keyboardType='default'
                placeholder='Username'
                onChangeText={text=> this.setState({username:text})}
                />

                <TextInput 
                style={styles.inputs} 
                keyboardType='default'
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={text=> this.setState({password:text})}
                />

                <TouchableOpacity style={styles.boton} onPress={()=>this.onSubmit()}>
                    <Text style={styles.textoBoton}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Register') }>
                    <Text>No tenes cuenta?</Text>
                </TouchableOpacity>

            </View>
        )
    }



}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        borderColor:'#28a745',
        borderRadius:4,
        paddingVertical: 20,
        marginTop:20,
        borderWidth:1.5,
    },

    title:{
        fontSize: 25,
        color: '#28a745'
    },

    inputs:{
        height:20,
        paddingVertical:15,
        paddingHorizontal:10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        marginVertical: 10,
    },

    boton:{
        backgroundColor:'#28a745',
        paddingHorizontal: 10,
        paddingVertical:6,
        alignItems: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#28a745'
    },

    textoBoton:{
        color: '#fff'
    }
}) 

export default Login