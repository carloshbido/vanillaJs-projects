class GitHub {
  constructor() {
    this.client_id = 'Iv1.6c5c0a19e9cf0b12',
      this.client_secret = '1c3555f4e368643ea2376649af946d9342b8ec1d'
  }

  async getUser(user) {
    const profileUser = await fetch(`https://api.github.com/users/${user}?${this.client_id}&${this.client_secret}`);
    const profileData = await profileUser.json();

    return {
      profile: profileData
    }

  }
}