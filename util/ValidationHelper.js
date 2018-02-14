const ValidationHelper = {
  checkAddressValid(addr) {
    return addr.length === 42 && addr.substr(0, 2) === '0x';
  },
  filterUserData({
    user,
    displayName,
    email,
    avatar,
    wallet,
    isEmailVerified,
  }) {
    return {
      user,
      displayName,
      email,
      avatar,
      wallet,
      isEmailVerified,
    };
  },
};

export default ValidationHelper;
