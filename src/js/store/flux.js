const apiUrl = 'https://playground.4geeks.com/contact'
const agendaSlug = 'RicardoMiguelR'
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [],
			showModal: false,
            confirmDeleteContact: null
		},
		actions: {

			createAgenda: async () => {
				const response = await fetch(`${apiUrl}/agendas/${agendaSlug}`, {method: 'POST'})
				console.log(response)
				const data = await response.json()
				console.log(data)
			},

			getContacts: async () => {
				const response = await fetch(`${apiUrl}/agendas/${agendaSlug}/contacts`)
				console.log(response)
				const data = await response.json()
				console.log(data)
				if (response.ok) {
					setStore({contacts: data.contacts})
					return true 
				}
				setStore({contacts: false})
				return false 
			},

			addContact: async (contact) => {
				const store = getStore()
				const response = await fetch(`${apiUrl}/agendas/${agendaSlug}/contacts`, {
					method: 'POST',
					body: JSON.stringify(contact),
					headers: {
						'Content-Type': 'application/json' 
					}
				})
				console.log(response)
				const data = await response.json()
				console.log(data)
				if (response.ok) {
					setStore({ contacts: [...store.contacts, data] });
					return true 
				}
				return false 
			},

			editContact: async (id, contact) => {
				const store = getStore();
				const response = await fetch(`${apiUrl}/agendas/${agendaSlug}/contacts/${contact.id}`, {
					method: 'PUT',
					body: JSON.stringify(contact),
					headers: {
						'Content-Type': 'application/json' 
					}
				})
				console.log(response)
				const data = await response.json()
				console.log(data)
				if (response.ok) {
					const updatedContacts = store.contacts.map(element =>
						element.id === id ? data : element
					);
					setStore({ contacts: updatedContacts })
					return true 
				}
				return false
			},

			// Modal code

			setConfirmDeleteContact: (contact) => {
                setStore({ confirmDeleteContact: contact, showModal: true });
            },

            closeDeleteModal: () => {
                setStore({ showModal: false, confirmDeleteContact: null });
            },

            confirmDeleteContact: async () => {
                const store = getStore();
                const contact = store.confirmDeleteContact;

                if (contact) {
                    const response = await fetch(`${apiUrl}/agendas/${agendaSlug}/contacts/${contact.id}`, {
                        method: 'DELETE',
                    });
                    if (response.ok) {
                        const updatedContacts = store.contacts.filter(element => element.id !== contact.id);
                        setStore({ contacts: updatedContacts, showModal: false, confirmDeleteContact: null });
                        return true;
                    }
                }
                return false;
            }
		}
	};
};

export default getState;
