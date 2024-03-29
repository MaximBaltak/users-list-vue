export default {
    namespaced: true,
    state: {
        titleUser: 'list',
        users: [
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                title: 'Brunch this weekend?',
                subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                country: 'usa',
                address: 'Los Angeles, 2907 South Crenshaw Boulevard',
                score: 30,
                divider: true,
                inset: true,
            },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
                country: 'usa',
                score: 6,
                address: 'Richmond, 701 East Franklin Street',
                divider: true,
                inset: true,
            },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                title: 'Oui oui',
                subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
                country: 'russia',
                score: 12,
                address: 'Moscow, 2nd Vladimirskaya street 15k3',
                divider: true,
                inset: true,
            },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                title: 'Birthday gift',
                subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
                country: 'usa',
                score: 34,
                address: 'Richmond, 1201 East Clay Street',
                divider: true,
                inset: true,
            },
            {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                title: 'Recipe to try',
                subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                country: 'russia',
                score: 23,
                address: 'Kazan, 49 Vishnevsky Street',
                divider: true,
                inset: true,
            },
        ],
    }
}
