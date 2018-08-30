
const moduleLocation = { 
    namespaced: true,
    state: { 
        location: {
           latitude: '',
           longitude: ''
        },
        error:{
            active:'true'
        }
    }, 
    mutations: { 
        updateLocation(state, location) { 
            if(location != ""){
                state.location.latitude = location.latitude
                state.location.longitude = location.longitude
            } else {
                state.location.latitude = "0"
                state.location.longitude = "0"
            }
        },
        error(state, error){
            state.error.msg = error.msg
            state.error.active = error.active
        }
    },
    actions: {
        geolocale({commit}){
            if (navigator.geolocation) {
                return navigator.geolocation.getCurrentPosition(
                    function (position) {
                        location.latitude=position.coords.latitude
                        location.longitude= position.coords.longitude
                        commit('updateLocation', location)
                    } , 
                    function (error) {
                        switch(error.code) {
                            case error.PERMISSION_DENIED:
                            error.msg = "No hay permiso para Geolocalización en su Dispositivo."
                            break;
                            case error.POSITION_UNAVAILABLE:
                            error.msg = "La información para tu localización actual, no está disponible."
                            break;
                            case error.TIMEOUT:
                            error.msg = "Lo siento se ha tardado mucho en conocer la ubicación actual."
                            break;
                            case error.UNKNOWN_ERROR:
                            error.msg = "A ocurrido un error inesperado."
                            break;
                        }
                        error.active = false
                        console.log(error)
                        commit('error', error)
                        return error
                    }
                )
            } else {
                error.msg = 'la geolocalización NO está disponible en su Dispositivo'
                error.active = false
                console.log(error)
                commit('error', error)
            }
        },
    }
};

export default moduleLocation