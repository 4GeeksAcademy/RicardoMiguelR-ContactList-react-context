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
			contacts: []
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

			//add contact to the list
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

			// edit contact from the list
			editContact: (id, updatedContact) => {
				// pulls contacts from the store
				let listOfContacts = getStore().contacts;
				// find the index of contact with the given id
				const contactIndex = listOfContacts.findIndex(contact => contact.id === id);
				if (contactIndex !== -1) {
					// copy the list and update the contact
					const updatedContacts = [...listOfContacts];
					updatedContacts[contactIndex] = { ...updatedContacts[contactIndex], ...updatedContact };
					// updates the contacts' info in the store
					setStore({ contacts: updatedContacts });
				}
			},

			// toggle the modal on
			toggleModal: (show) => {
				setStore({ showModal: show })
			},

			// checks if all fields are filled else shows modals
			checkEmptyFields: (newContact) => {
				const { name, homeAddress, phone, email } = newContact;
				if (name && homeAddress && phone && email) {
					// if all fields are filled, saves contact
					getActions().addContact(newContact);
				} else {
					// if any field is empty, shows modal
					getActions().toggleModal(true);
				}
			},

			//close modal button
			closeModal: () => {
				setStore({ showModal: false });
			},

			// set contact to be deleted
			setContactToBeDeleted: (contact) => {
				setStore({ contactToBeDeleted: contact });
			},

			// close the confirm delete modal without deleting a record
			closeDeleteModal: () => {
				setStore({ showModal: false, contactToBeDeleted: null });
			},

			//delete contact from the list
			deleteContact: (contact) => {
				//pulls the contacts in the store
				let listOfContacts = getStore().contacts;
				//filters the contact and generates new array
				setStore({ contacts: listOfContacts.filter((item) => item !== contact) });
				// close the confirm delete modal after deleting a record
				getActions().closeDeleteModal();
			},
		}
	};
};

export default getState;
