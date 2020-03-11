import { environment } from '../../../../environments/environment';

export const API = environment.API;

export class SecretFriendApi {
  public static getFriends = () => {
    return `${API}/friends`;
  }

  public static postNewFriend = () => {
    return `${API}/friends/new`;
  }

  public static postSortFriend = () => {
    return `${API}/friends/sort`;
  }
}
