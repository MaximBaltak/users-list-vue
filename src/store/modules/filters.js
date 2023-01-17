import store from "@/store";
import {filterCountry} from "@/filters/filterCountry";
import {filterScore} from "@/filters/filterScore";

export default {
    namespaced: true,
    state: {
        loader: false,
        countryFilterOptions: [
            'russia',
            'usa',
        ],
        scoreFilterOptions: [
            '> 20',
            '< 10',
        ],
        filters: {
            score: null,
            country: null
        },
        filterUsers: []
    },
    mutations: {
        updateFilterCountry(state, value) {
            state.filters.country = value
        },
        updateFilterScore(state, value) {
            state.filters.score = value
        },
        updateFilterUsers(state) {
            state.loader = true
            const score = state.filters.score
            const country = state.filters.country
            const users = store.state.users.users
            state.filterUsers = [...users]
            if (country) state.filterUsers = filterCountry(state.filterUsers, country)
            if (score) state.filterUsers = filterScore(state.filterUsers, score)
            state.loader = false
        }
    }
}
