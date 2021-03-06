<script>
  import { stores } from '@sapper/app';
  import AccoutUser from './Accout_User.svelte';
  const { session } = stores();
  const user = $session.user._doc;
</script>

<div class="user">
  <div class="user-data">
    <span>{user.username.slice(1, user.username.length)}</span>
    <img src={user.image} alt="profile" />
  </div>
</div>

<style lang="scss">
  .user {
    display: flex;
    .user-data {
      display: flex;
      align-items: center;
      span {
        font-family: var(--font-title);
        font-weight: 500;
        font-size: 16px;
        margin-right: 0.75rem;
        color: var(--color-black-1);
      }
      img {
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
      }
    }
  }
</style>
