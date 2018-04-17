import { AsyncStorage } from 'react-native'

export default storage = key => {

    console.tron.log('storage')
    // AsyncStorage.getItem(key).then(item => {
    //     console.tron.log(item)
    // }).catch(err => {
    //     console.tron.log(err)
    // })

    return {
        setItem: value => AsyncStorage.setItem(key, value),
        getItem: () => AsyncStorage.getItem(key),
        setObject: value => AsyncStorage.setItem(key, JSON.stringify(value)),
        getObject: () => AsyncStorage.getItem(key).then(JSON.parse)
    }

}