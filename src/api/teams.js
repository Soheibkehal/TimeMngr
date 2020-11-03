import axios from "axios";

import { URL, user_id, loggedHeaders } from "../config/constants";
axios.defaults.headers = loggedHeaders;

export const getTeamUser = () => {
    const config = {
        method: "get",
        url: `${URL}/teams/${user_id}`
    }

    const res = await axios(config)
    return res.data.data
}

export const createTeam = (name) => {
    const data  = JSON.stringify({"team": {name, user_id}})
    const config = {
        method: "post",
        url: `${URL}/teams/${user_id}`,
        data
    }

    const res = await axios(config)
    return res.data.data
}

export const changeTeamName = (name) => {
    const data  = JSON.stringify({"team": {name, user_id}})
    const config = {
        method: "put",
        url: `${URL}/teams/${user_id}`,
        data
    }
    const res = await axios(config)
    return res.data.data
}

export const changeTeamUser = (id) => {
    const data  = JSON.stringify({"team": {user_id: id}})
    const config = {
        method: "put",
        url: `${URL}/teams/${user_id}`,
        data
    }
    const res = await axios(config)
    return res.data.data
}

export const deleteTeam = (id) => {
    const config = {
        method: "delete",
        url: `${URL}/teams/${user_id}/${id}`,
    }
    const res = await axios(config)
    return res.data.data
}