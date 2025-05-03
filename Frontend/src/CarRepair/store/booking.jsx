import {create} from 'zustand';

import { useSelector } from 'react-redux';
export const useBookingStore = create((set) => ({
    bookings: [],
    
    setBooking: (booking) => 
        set((state) => ({ bookings: [...state.bookings, booking] })),

    createBooking: async (newBooking) => {
        if ( !newBooking.customer || !newBooking.contact || !newBooking.time || !newBooking.location) {
            return { success: false, message: 'Please fill all fields' };
        }
        console.log()


        try {
            const res = await fetch("/api/create/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newBooking),
            });

            if (!res.ok) throw new Error('Booking failed');

            const data = await res.json();
            set((state) => ({ bookings: [...state.bookings, data.data] }));

            return { success: true, message: 'Booking successful' };
        } catch (error) {
            return { success: false, message: error.message };
        }
    },

    fetchBooking: async (email) => {
        
        const userEmail = email
        if (!userEmail) return;
    
        try {
            const endpoint = email ? `/api/booking?email=${email}` : `/api/booking`;
            const res = await fetch(endpoint);
            const data = await res.json();
        
            if (data.success) {
              set({ bookings: data.data });
            } else {
              console.error(data.message);
            }
          } catch (error) {
            console.error("Error fetching bookings", error);
          }
    },

    deleteBooking: async (sid)=>{
        const res= await fetch(`/api/delete/booking/${sid}`,{
            method:"Delete",
        });
       const data = await res.json();
       if(!data.success){
        return {success: false, message:data.message}
    }

        set(state => ({bookings: state.bookings.filter(service=> service._id !==sid)}))
        return {success: true, message:'Deleted Successfully'}
    },

     UpdateBooking: async (sid,Updatedbooking ) => {
         const res= await fetch(`/api/update/booking/${sid}`,{
             method:"PUT",
             headers: {
                 "Content-Type": "application/json"
             },
             body: JSON.stringify(Updatedbooking)
         });
         const data =await res.json();
         if(!data.success) return {success: false, message: data.message};

         //refresh dashboard after update operation
         set(state => ({
             bookings: state.bookings.map(booking => booking._id === sid ? data.data :booking)
         }))
         return { success: true, message: 'Booking updated successfully' }; 

     }
    

}));