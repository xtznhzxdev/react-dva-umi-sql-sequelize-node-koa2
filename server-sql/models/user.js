import User from '../schema/user';

// 创建用户
exports.createUser = async (user) => {
  if(!user) {
    return {};
  }
  return await User.create(user);
}

// 通过用户名查询用户
exports.findUserByName = async (username) => {
  if (!username) {
    return {};
  }
  return await User.findOne({
    where: {
      username
    }
  })
}


// 通过邮箱查询用户
exports.findUserByEmail = async (email) => {
  if (!email) {
    return {};
  }
  return await User.findOne({
    where: {
      email
    }
  })
}


// 删除用户
exports.deleteUser = async (id) => {
  if (!id) {
    return false;
  }
  await User.destroy({
    where: {
      id
    }
  })
  return true
}

// 查询所有用户
exports.findUserList = async () => {
  return await User.findAll({
    attributes: ['id', 'username', 'email']
  })
}