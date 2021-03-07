<script>
  import EventImage from './img/event.svg';
  let moreInformationUrl = '#';
  let description =
    'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ';
</script>

<article>
  <div>
    <img src={EventImage} alt="Event" />
  </div>
  <div class="Event-content">
    <div>
      <p>{description}</p>
    </div>
    <div class="Event-content-actions">
      <a href={moreInformationUrl}>Mas informacion</a>
      <button>Participar</button>
    </div>
  </div>
</article>

<style>
  article {
    display: grid;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }
  article div img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .Event-content {
    padding: 10px;
  }
  .Event-content p {
    margin-bottom: 10px;
  }
  .Event-content-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Event-content-actions button {
    background-color: var(--color-primary-1);
    color: white;
    border-radius: 5px;
    padding: 10px 20px;
  }
  /* .Event-content-actions button:hover{

  } */
  .Event-content-actions a {
    color: #636bfb;
  }
</style>
