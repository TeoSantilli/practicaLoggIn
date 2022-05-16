import React, {Component} from 'react'

//Importar Navegaciones
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'


//Guardar ejecucuon de stack
const Stack = createNativeStackNavigator()

//importar las screens que necesite el menu
import Login from '../screens/Login'
import Register from '../screens/Register'
import Menu from './Menu'

class MainNavigation extends Component{
    constructor(props){
        super(props)
        this.state={
            loggedIn: false,
        }
    }

    login(){

    }

    register(){

    }

    logOut(){
        
    }

    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator>
                { 
                this.state.loggedIn ?
                    <Stack.Screen 
                        name='Menu'
                        component={Menu}
                        options={{headerShown:false}}
                    />
                    :
                    <Stack.Group>
                        <Stack.Screen
                            name='Login'
                            component={Login}
                            options={{headerShown:false}}

                        />
                        <Stack.Screen
                            name='Register'
                            component={Register}
                            options={{headerShown:false}}                            
                        />
                    </Stack.Group>
                }
                </Stack.Navigator>

            </NavigationContainer>
        )
    }




}
export default MainNavigation