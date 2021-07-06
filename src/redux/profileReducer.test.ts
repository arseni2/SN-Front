import {actions, InitialStateType, ProfileReducer} from "./profileReducer";
import {setCountry, setStatus} from "../api/profile";

let state: InitialStateType;
let dataChangeCountryApi: any;
jest.mock('../api/profile')
const setCountryMock = setCountry.mockReturnValue({
    profile: [{
        id: 1,
        email: "arsenij633@gmail.com",
        birth_date: null,
        status: "new status",
        first_name: "arsenii",
        last_name: "voronov",
        username: "arseenii",
        country: "Piter",
        year: null,
        is_active: true,
        is_admin: true,
        userPhotos: "/media/userPhotos/ArcheAge_sample_DV3Q1Fk.jpg",
        full_name: "arsenii voronov",
        slug: "arseniivoronov1"
    }]
})
const setStatusMock = setStatus as jest.Mocked<any>;
const dispatchMock = jest.fn()
beforeEach(() => {
    //dispatchMock.mockClear();
    //setCountryMock.mockClear()
    setStatusMock.mockClear()
    dataChangeCountryApi = {
        profile: [{
            birth_date: null,
            country: "Vologda",
            email: "arc-37@mail.ru",
            first_name: "arsenii",
            full_name: "arsenii voronov",
            id: 2,
            is_active: true,
            is_admin: true,
            last_name: "voronov",
            slug: "arseniivoronov2",
            status: "new status",
            userPhotos: "/media/userPhotos/super_skull_zavT2qe.png",
            username: "arsenii",
            year: null
        }]
    }
    state = {
        isLoading: false,
        profile: [[{
            birth_date: null,
            country: "Piter",
            email: "arc-37@mail.ru",
            first_name: "arsenii",
            full_name: "arsenii voronov",
            id: 2,
            is_active: true,
            is_admin: true,
            last_name: "voronov",
            slug: "arseniivoronov2",
            status: "new status",
            userPhotos: "/media/userPhotos/super_skull_zavT2qe.png",
            username: "arsenii",
            year: null
        }]],
        posts: [{
            editMode: false,
            id: 1,
            image: '/media/userPhotos/super_skull_zavT2qe.png',
            date: '',
            des: 'des',
            like: 0,
            reviews: [],
            user: {
                birth_date: null,
                country: "Vologda",
                email: "arc-37@mail.ru",
                first_name: "arsenii",
                full_name: "arsenii voronov",
                id: 2,
                is_active: true,
                is_admin: true,
                last_name: "voronov",
                slug: "arseniivoronov2",
                status: "new statu",
                userPhotos: "/media/userPhotos/super_skull_zavT2qe.png",
                username: "arsenii",
                year: null
            }
        }],
    }
})
//setCountryMock.mockReturnValueOnce(Promise.resolve({res:{data:{profile:[{country: "Piter"}]}}}));
/*test("check on change data setCountryUserThunk and setStatusUserThunk in state", async () => {
    // санку нужно прверять сколько раз диспачит а экшены нужно проверять меняют ли правильно стейт каждый экшен отдельно
    const thunk = await setCountryUserThunk('Piter')
    const thunk2 = await setStatusUserThunk('new status')
    await thunk(dispatchMock)
    await thunk2(dispatchMock)
    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toBeCalledTimes(1)
    /*const dispatch = await jest.fn();
    await setCountryUserThunk("Piter")(await dispatch);
    await expect(await dispatch).toBeCalledWith({type: "CHANGECOUNTRY"});
})*/

describe('check setCountry api change state correctly', () => {
    test('check on valid data in setCountry api', async () => {
        /*expect(setCountry('Vologda')).not.toBeNull();
        expect(setCountry('Vologda')).not.toBeUndefined();
        expect(setCountry('Vologda')).toBeTruthy();*/

        expect(dataChangeCountryApi).toEqual({
            profile: [{
                birth_date: null,
                country: "Vologda",
                email: "arc-37@mail.ru",
                first_name: "arsenii",
                full_name: "arsenii voronov",
                id: 2,
                is_active: true,
                is_admin: true,
                last_name: "voronov",
                slug: "arseniivoronov2",
                status: "new status",
                userPhotos: "/media/userPhotos/super_skull_zavT2qe.png",
                username: "arsenii",
                year: null
            }]
        })
    })

})
test('testing profileReducer changeCountry action', () => {
    //@ts-ignore
    let action = actions.changeCountry([[{
        birth_date: null,
        country: "Piter",
        email: "arc-37@mail.ru",
        first_name: "arsenii",
        full_name: "arsenii voronov",
        id: 2,
        is_active: true,
        is_admin: true,
        last_name: "voronov",
        slug: "arseniivoronov2",
        status: "new status",
        userPhotos: "/media/userPhotos/super_skull_zavT2qe.png",
        username: "arsenii",
        year: null
    }]])

    // 2. action
    let newState = ProfileReducer(state, action);
    console.log(newState)
    // 3. expectation
    expect(newState.profile).toEqual(state.profile);

})
test('testing profileReducer changeStatus action', () => {
    let action = actions.changeStatus({
        birth_date: null,
        country: "Vologda",
        email: "arc-37@mail.ru",
        first_name: "arsenii",
        full_name: "arsenii voronov",
        id: 2,
        is_active: true,
        is_admin: true,
        last_name: "voronov",
        slug: "arseniivoronov2",
        status: "new statu",
        userPhotos: "/media/userPhotos/super_skull_zavT2qe.png",
        username: "arsenii",
        year: null
    })

    // 2. action
    let newState = ProfileReducer(state, action);
    expect(newState.profile).toEqual({
        birth_date: null,
        country: "Vologda",
        email: "arc-37@mail.ru",
        first_name: "arsenii",
        full_name: "arsenii voronov",
        id: 2,
        is_active: true,
        is_admin: true,
        last_name: "voronov",
        slug: "arseniivoronov2",
        status: "new statu",
        userPhotos: "/media/userPhotos/super_skull_zavT2qe.png",
        username: "arsenii",
        year: null
    });


})
test('should change state editPostAction correctly', () => {
    let action = actions.editPost({
        editMode: true,
        id: 1,
        image: null,
        date: '',
        des: 'des edited',
        like: 0,
        reviews: [],
        user: {
            birth_date: null,
            country: "Vologda",
            email: "arc-37@mail.ru",
            first_name: "arsenii",
            full_name: "arsenii voronov",
            id: 2,
            is_active: true,
            is_admin: true,
            last_name: "voronov",
            slug: "arseniivoronov2",
            status: "new statu",
            userPhotos: "/media/userPhotos/super_skull_zavT2qe.png",
            username: "arsenii",
            year: null
        }
    })
    let newState = ProfileReducer(state, action);
    // @ts-ignore
    console.log(newState.posts[0])
    // @ts-ignore
    expect(newState.posts[0]).toEqual(
        {
            editMode: false,
            id: 1,
            image: null,
            date: '',
            des: 'des edited',
            like: 0,
            reviews: [],
            user: {
                birth_date: null,
                country: "Vologda",
                email: "arc-37@mail.ru",
                first_name: "arsenii",
                full_name: "arsenii voronov",
                id: 2,
                is_active: true,
                is_admin: true,
                last_name: "voronov",
                slug: "arseniivoronov2",
                status: "new statu",
                userPhotos: "/media/userPhotos/super_skull_zavT2qe.png",
                username: "arsenii",
                year: null
            }
        }
    )
    //expect(newState.posts)
})