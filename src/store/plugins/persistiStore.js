import throttle from 'lodash/throttle'
import storage from 'utils/storage'

const stateStorage = storage('@Udacity:flashcards:state')

const persistStore = () => {
    const bottleNeck = throttle((state) => {
        console.tron.log('State Persisted')
        stateStorage.setObject(state)
        .catch(err => {
            console.tron.log(err)
          })
    }, 2000)
    return {

        init: (expose) => ({
            middleware: store => next => action => {
                next(action) // call next before to get updated state
                bottleNeck(store.getState())
                return 
            }
        })
    }
  }

export default persistStore;