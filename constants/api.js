const backEndUrL = process.env.BACKEND_URL || 'http://localhost:3000'

export const fetchSessions = () => {
    console.log('fetch sessions is called')
return fetch('http://192.168.1.3:3000/api/sessions')
    .then(res => res.json()).then(json => json).catch(err => {console.error(err.message); return err});
}