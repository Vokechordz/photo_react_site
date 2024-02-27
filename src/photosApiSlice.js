import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "./app/api/apiSlice";



const photosAdapter= createEntityAdapter({})

const initialState= photosAdapter.getInitialState()

export const photosApiSlice= apiSlice.injectEndpoints({
    endpoints: builder=> ({
        getPhotos: builder.query({
            query: ()=> '/photos',
            validateStatus: (response, result)=> {
                return response.status === 200 && !result.isError
            },
            transformResponse: responseData => {
                const loadedPhotos=  responseData.map(photo=> {
                    photo.id= photo._id
                    return photo
                })
                return photosAdapter.setAll(initialState, loadedPhotos)
            },
            providesTags: (result, error, arg)=> {
                if (result?.ids) {
                    return [
                        { type: 'Photo', id: 'LIST' },
                        ...result.ids.map(id=> ({ type: 'Photo', id }))
                    ]
                } else return [{ type: 'Photo', id: 'LIST' }]
            }
        })
    }),
})


export const {
    useGetPhotosQuery
}= photosApiSlice



//retruns the query result object
export const selectUsersResult= photosApiSlice.endpoints.getPhotos.select()

//creates memoized selector
const selectPhotosData= createSelector(
    selectUsersResult,
    usersResult=> usersResult.data // normalized state object with ids and entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
    selectAll: selectPhotos,
    selectById: selectPhotoById,
    selectIds: selectPhotoIds
    //pass in a selector that returns the users slice of state
}= photosAdapter.getSelectors(state=> selectPhotosData(state) ?? 
initialState)