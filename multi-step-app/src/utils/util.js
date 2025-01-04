const getPlanCosting = (plan, subscription) => {
    switch (plan) {
        case 'Arcade':
            return subscription === 'Monthly'
                ? { text: '$9/mo', value: 9 }
                : { text: '$90/yr', value: 90 }
        case 'Advanced':
            return subscription === 'Monthly'
                ? { text: '$12/mo', value: 12 }
                : { text: '$120/yr', value: 120 }
        case 'Pro':
            return subscription === 'Monthly'
                ? { text: '$15/mo', value: 15 }
                : { text: '$150/yr', value: 150 }
    }
}

const getAddonCosting = (service, subscription) => {
    switch (service) {
        case 'Online service':
            return subscription === 'Monthly'
                ? { text: '$1/mo', value: 1 }
                : { text: '$10/yr', value: 10 }
        case 'Larger storage':
            return subscription === 'Monthly'
                ? { text: '$2/mo', value: 2 }
                : { text: '$20/yr', value: 20 }
        case 'Customizable profile':
            return subscription === 'Monthly'
                ? { text: '$2/mo', value: 2 }
                : { text: '$20/yr', value: 20 }
    }
}

export { getPlanCosting, getAddonCosting }
