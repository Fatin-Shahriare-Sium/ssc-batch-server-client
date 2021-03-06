import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type CreateStudentMutationResponses = {
  __typename?: 'CreateStudentMutationResponses';
  gmail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  msg?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Details = {
  __typename?: 'Details';
  text?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createStudent?: Maybe<CreateStudentMutationResponses>;
  updateProfile?: Maybe<UpdateProfileMutationResponses>;
  updateProfilePic?: Maybe<UpdateProfilePicResponses>;
};


export type MutationCreateStudentArgs = {
  gmail: Scalars['String'];
  name: Scalars['String'];
  uid?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateProfileArgs = {
  birthDate?: InputMaybe<Scalars['String']>;
  birthplace?: InputMaybe<Scalars['String']>;
  currentlocation?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  fathername?: InputMaybe<Scalars['String']>;
  gmail?: InputMaybe<Scalars['String']>;
  hobby?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['Int']>;
  rollNumber?: InputMaybe<Scalars['String']>;
  studiedAt?: InputMaybe<Scalars['String']>;
  studingAt?: InputMaybe<Scalars['String']>;
  tiktok?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  userUid?: InputMaybe<Scalars['String']>;
  workingAs?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateProfilePicArgs = {
  alt?: InputMaybe<Scalars['String']>;
  src?: InputMaybe<Scalars['String']>;
  userUid?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  allStudentsData?: Maybe<Array<Maybe<StudentDataResponses>>>;
  details?: Maybe<Details>;
  profileData?: Maybe<UpdateProfileMutationResponses>;
};


export type QueryProfileDataArgs = {
  userUid: Scalars['String'];
};

export type SocialLinks = {
  __typename?: 'SocialLinks';
  facebook?: Maybe<Scalars['String']>;
  tiktok?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
};

export type StudentDataResponses = {
  __typename?: 'StudentDataResponses';
  gmail?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
};

export type UpdateProfileMutationResponses = {
  __typename?: 'UpdateProfileMutationResponses';
  birthDate?: Maybe<Scalars['String']>;
  birthplace?: Maybe<Scalars['String']>;
  currentlocation?: Maybe<Scalars['String']>;
  fathername?: Maybe<Scalars['String']>;
  gmail?: Maybe<Scalars['String']>;
  hobby?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['Int']>;
  profileImg?: Maybe<Scalars['String']>;
  rollNumber?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<SocialLinks>;
  studiedAt?: Maybe<Scalars['String']>;
  studingAt?: Maybe<Scalars['String']>;
  workingAs?: Maybe<Scalars['String']>;
};

export type UpdateProfilePicResponses = {
  __typename?: 'updateProfilePicResponses';
  msg?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['Boolean']>;
};

export type Unnamed_1_QueryVariables = Exact<{
  userUid: Scalars['String'];
}>;


export type Unnamed_1_Query = { __typename?: 'Query', profileData?: { __typename?: 'UpdateProfileMutationResponses', name?: string | null | undefined, profileImg?: string | null | undefined, fathername?: string | null | undefined, rollNumber?: string | null | undefined, gmail?: string | null | undefined, phoneNumber?: number | null | undefined, birthDate?: string | null | undefined, birthplace?: string | null | undefined, currentlocation?: string | null | undefined, hobby?: string | null | undefined, studingAt?: string | null | undefined, studiedAt?: string | null | undefined, workingAs?: string | null | undefined, socialLinks?: { __typename?: 'SocialLinks', facebook?: string | null | undefined, twitter?: string | null | undefined, tiktok?: string | null | undefined, youtube?: string | null | undefined } | null | undefined } | null | undefined };

export type Unnamed_2_MutationVariables = Exact<{
  userUid?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  fathername?: InputMaybe<Scalars['String']>;
  gmail?: InputMaybe<Scalars['String']>;
  rollNumber?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['Int']>;
  birthDate?: InputMaybe<Scalars['String']>;
  birthplace?: InputMaybe<Scalars['String']>;
  currentlocation?: InputMaybe<Scalars['String']>;
  hobby?: InputMaybe<Scalars['String']>;
  studingAt?: InputMaybe<Scalars['String']>;
  studiedAt?: InputMaybe<Scalars['String']>;
  workingAs?: InputMaybe<Scalars['String']>;
  facebook?: InputMaybe<Scalars['String']>;
  twitter?: InputMaybe<Scalars['String']>;
  tiktok?: InputMaybe<Scalars['String']>;
  youtube?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_2_Mutation = { __typename?: 'Mutation', updateProfile?: { __typename?: 'UpdateProfileMutationResponses', name?: string | null | undefined, fathername?: string | null | undefined, gmail?: string | null | undefined, rollNumber?: string | null | undefined, phoneNumber?: number | null | undefined, birthDate?: string | null | undefined, birthplace?: string | null | undefined, currentlocation?: string | null | undefined, hobby?: string | null | undefined, studingAt?: string | null | undefined, studiedAt?: string | null | undefined, workingAs?: string | null | undefined } | null | undefined };

export type Unnamed_3_MutationVariables = Exact<{
  userUid?: InputMaybe<Scalars['String']>;
  src?: InputMaybe<Scalars['String']>;
  alt?: InputMaybe<Scalars['String']>;
}>;


export type Unnamed_3_Mutation = { __typename?: 'Mutation', updateProfilePic?: { __typename?: 'updateProfilePicResponses', success?: boolean | null | undefined, msg?: string | null | undefined } | null | undefined };

import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "CreateStudentMutationResponses",
        "fields": [
          {
            "name": "gmail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "msg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "success",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Details",
        "fields": [
          {
            "name": "text",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "createStudent",
            "type": {
              "kind": "OBJECT",
              "name": "CreateStudentMutationResponses",
              "ofType": null
            },
            "args": [
              {
                "name": "gmail",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "name",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "uid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateProfile",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateProfileMutationResponses",
              "ofType": null
            },
            "args": [
              {
                "name": "birthDate",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "birthplace",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "currentlocation",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "facebook",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "fathername",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "gmail",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "hobby",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "name",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "phoneNumber",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "rollNumber",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "studiedAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "studingAt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "tiktok",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "twitter",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "userUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "workingAs",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "youtube",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "updateProfilePic",
            "type": {
              "kind": "OBJECT",
              "name": "updateProfilePicResponses",
              "ofType": null
            },
            "args": [
              {
                "name": "alt",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "src",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "userUid",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "allStudentsData",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "StudentDataResponses",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "details",
            "type": {
              "kind": "OBJECT",
              "name": "Details",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "profileData",
            "type": {
              "kind": "OBJECT",
              "name": "UpdateProfileMutationResponses",
              "ofType": null
            },
            "args": [
              {
                "name": "userUid",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "SocialLinks",
        "fields": [
          {
            "name": "facebook",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "tiktok",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "twitter",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "youtube",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "StudentDataResponses",
        "fields": [
          {
            "name": "gmail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "profileImg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "uid",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UpdateProfileMutationResponses",
        "fields": [
          {
            "name": "birthDate",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "birthplace",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "currentlocation",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "fathername",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "gmail",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "hobby",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "phoneNumber",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "profileImg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "rollNumber",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "socialLinks",
            "type": {
              "kind": "OBJECT",
              "name": "SocialLinks",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "studiedAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "studingAt",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "workingAs",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "updateProfilePicResponses",
        "fields": [
          {
            "name": "msg",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "success",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;

export const Document = gql`
    query ($userUid: String!) {
  profileData(userUid: $userUid) {
    name
    profileImg
    fathername
    rollNumber
    gmail
    phoneNumber
    birthDate
    birthplace
    currentlocation
    hobby
    studingAt
    studiedAt
    workingAs
    socialLinks {
      facebook
      twitter
      tiktok
      youtube
    }
  }
}
    `;
    

// export function useQuery(options: Omit<Urql.UseQueryArgs<QueryVariables>, 'query'> = {}) {
//   return Urql.useQuery<Query>({ query: Document, ...options });
// };
// export const Document = gql`
//     mutation ($userUid: String, $name: String, $fathername: String, $gmail: String, $rollNumber: String, $phoneNumber: Int, $birthDate: String, $birthplace: String, $currentlocation: String, $hobby: String, $studingAt: String, $studiedAt: String, $workingAs: String, $facebook: String, $twitter: String, $tiktok: String, $youtube: String) {
//   updateProfile(
//     userUid: $userUid
//     name: $name
//     fathername: $fathername
//     gmail: $gmail
//     phoneNumber: $phoneNumber
//     rollNumber: $rollNumber
//     birthDate: $birthDate
//     birthplace: $birthplace
//     currentlocation: $currentlocation
//     hobby: $hobby
//     studingAt: $studingAt
//     studiedAt: $studiedAt
//     workingAs: $workingAs
//     facebook: $facebook
//     twitter: $twitter
//     tiktok: $tiktok
//     youtube: $youtube
//   ) {
//     name
//     fathername
//     gmail
//     rollNumber
//     phoneNumber
//     birthDate
//     birthplace
//     currentlocation
//     hobby
//     studingAt
//     studiedAt
//     workingAs
//   }
// }
//     `;

// export function useMutation() {
//   return Urql.useMutation<Mutation, MutationVariables>(Document);
// };
// export const Document = gql`
//     mutation ($userUid: String, $src: String, $alt: String) {
//   updateProfilePic(userUid: $userUid, src: $src, alt: $alt) {
//     success
//     msg
//   }
// }
//     `;

// export function useMutation() {
//   return Urql.useMutation<Mutation, MutationVariables>(Document);
// };