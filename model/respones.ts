import { User } from './user';

export type Response<T> = {
    data: T;
};

export type userResponse = Response<User>;
