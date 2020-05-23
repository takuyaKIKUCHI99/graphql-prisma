const Query = {
  comments(parent, args, { prisma }, info) {
    return prisma.query.comments(null, info);
  },

  posts(parent, args, { prisma }, info) {
    const operationArgs = {};

    if (args.query) {
      operationArgs.where = {
        OR: [
          {
            title_contains: args.query,
          },
          {
            body_contains: args.query,
          },
        ],
      };
    }

    return prisma.query.posts(operationArgs, info);

    // if (!args.query) return db.posts;

    // return db.posts.filter((post) => {
    //   const titleMatched = post.title
    //     .toLowerCase()
    //     .includes(args.query.toLowerCase());

    //   const bodyMatched = post.body
    //     .toLowerCase()
    //     .includes(args.query.toLowerCase());

    //   return titleMatched || bodyMatched;
    // });
  },

  users(parent, args, { prisma }, info) {
    const operationArgs = {};

    if (args.query) {
      operationArgs.where = {
        OR: [
          {
            name_contains: args.query,
          },
          {
            email_contains: args.query,
          },
        ],
      };
    }

    return prisma.query.users(null, info);
    // if (!args.query) return db.users;
    // return db.users.filter((user) => {
    //   return user.name.toLowerCase().includes(args.query.toLowerCase());
    // });
  },
};

export { Query as default };
