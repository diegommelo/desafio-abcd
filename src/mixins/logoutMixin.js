var logoutMixin = {
  methods: {
    onLogout() {
      this.userLogout()
        .then(() => {
          this.$router.push("/login");
        })
        .catch(() => {
          console.log(this.errorMessage);
        });
    },
  },
}

export default logoutMixin;