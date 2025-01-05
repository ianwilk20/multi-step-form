const getPlanCosting = (plan, subscription) => {
    switch (plan) {
        case 'Arcade':
            return subscription === 'Yearly'
                ? { text: '$90/yr', value: 90 } : { text: '$9/mo', value: 9 }
        case 'Advanced':
            return subscription === 'Yearly'
                ? { text: '$120/yr', value: 120 } : { text: '$12/mo', value: 12 }
        case 'Pro':
            return subscription === 'Yearly'
                ? { text: '$150/yr', value: 150 } : { text: '$15/mo', value: 15 }
    }
}

const getServiceCosting = (service, subscription) => {
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

const getServiceNameFromKey = (serviceKey) => {
    switch (serviceKey) {
        case 'online_service':
            return 'Online service'
        case 'larger_storage':
            return 'Larger storage'
        case 'customizable_profile':
            return 'Customizable profile'
    }
}
const listOfServices = ['online_service', 'larger_storage', 'customizable_profile']

export { getPlanCosting, getServiceCosting, getServiceNameFromKey, listOfServices }
