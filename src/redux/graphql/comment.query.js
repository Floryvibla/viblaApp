export const queryComments = (id) => {
    const query = {
        "operationName": "fetchcommentbyPost",
        "query": `query fetchCommentByPost {
            post(id: 10) {
                data {
                    id
                    attributes {
                       info
                       owner {
                           data {
                               id
                               attributes {
                                   username
                                   name
                                   is_founder
                                   is_verified
                                   avatar {
                                        data {
                                            attributes {
                                                url
                                            }
                                        }
                                    }
                                    
                               }
                           }
                       }
                       type {
                           data {
                               attributes {
                                   title
                               }
                           }
                       }
                       image {
                           data {
                               id
                           }
                       }
                       comments {
                           data {
                               id
                               attributes {
                                   comment
                                   createdAt
                                   replie_comments {
                                       data {
                                           id
                                           attributes {
                                               replie
                                               createdAt
                                               user {
                                                   data {
                                                       id
                                                       attributes {
                                                           name
                                                           username
                                                           is_founder
                                                           is_verified
                                                           avatar {
                                                               data {
                                                                   attributes {
                                                                       url
                                                                   }
                                                               }
                                                           }
                                                       }
                                                   }
                                               }
                                           }
                                       }
                                   }
                                   user {
                                       data {
                                            id
                                            attributes {
                                                username
                                                name
                                                is_founder
                                                is_verified
                                                avatar {
                                                    data {
                                                        attributes {
                                                            url
                                                        }
                                                    }
                                                }
                                                    
                                            }
                                        }
                                   }
                               }
                           }
                       }
                    }
                }
            }
        }`
    }
    
    return query
}