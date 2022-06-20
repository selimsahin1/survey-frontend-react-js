
import axios from 'axios'
import { API_URLS, HEADER } from '../utils/constans'

async function getSurveys() {

    return axios
        .get(API_URLS.BASE_URL + 'get-survey')
        // Success
        .then(result => {

            // Failed
            if (result.error) return Promise.reject(result.error)

            // Return
            return result
        })
        // Error
        .catch(e => Promise.reject(e))

}

async function submitSurvey(body) {

    return axios
        .post(API_URLS.BASE_URL + 'submit-survey', { ...body }, {
            headers: {


            },
        })
        // Success
        .then(result => {

            // Failed
            if (result.error) return Promise.reject(result.data.error)

            // Return  
            return result
        })
        // Error
        .catch(e => Promise.reject(e))
}
export {
    getSurveys,
    submitSurvey
}