const initialState = {
  showModal: false,
  profile: {},
  isLoading: false,
  followers: [],
  following: [],
};

const profileReducer = (state = initialState, action) => {
  const {
    showModal, isLoading, profile, followers, following,
  } = action;

  switch (action.type) {
    case 'SAVE_PROFILE':
      return { ...state, showModal };
    case 'EDIT_PROFILE':
      return { ...state, showModal };
    case 'PROFILE_FETCH':
      return { ...state, isLoading };
    case 'PROFILE_FETCHED':
      return { ...state, profile, isLoading };
    // case FOLLOWERS_FETCH:
    case 'FOLLOWERS_FETCHED':
      return { ...state, followers };
    // case FOLLOWING_FETCH:
    case 'FOLLOWING_FETCHED':
      return { ...state, following };
    case 'CANCEL_EDIT':
      return { ...state, showModal };
    case 'UPDATE_PROFILE':
      return { ...state, profile };
    default:
      return state;
  }
};

export default profileReducer;
