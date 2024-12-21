import { Alert } from 'react-native';
import { create } from 'apisauce';
import { API_VERSION, BASE_URL } from './paths';

// API calling configs
const api = create({
  baseURL: BASE_URL + API_VERSION,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'x-api-key': 'c53ea30356db4a6facff316764d75a84',
  },
});

api.addResponseTransform(async response => {
  if (!response.ok) {
    // More sophisticated error messages could be thrown to user in real world scenario having a contract b/w API and frontend of course
    if (response.status === 401 || response.status === 403) {
      Alert.alert('Unauthorized'); // TODO: show error nicely in a toast or something
      // TODO: logout user from the app
    } else {
      Alert.alert('Something went wrong'); // TODO: show error nicely in a toast or something
    }
    // TODO: Log error using a error logging service like sentry etc
  }
  return response;
});

export default api;
