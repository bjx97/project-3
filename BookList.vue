<template>
<div class="book-wrapper">
  <div class="books">
    <div class="book" v-for="book in books" :key="book.id">
        <div class="picture">
          <p><strong>Name:</strong> {{book.name}}</p>
          <img src="/images/AB.jpg"/>
        </div>
        <div class="info">
            <p><strong>Price:</strong> {{book.price}}</p>
            <p><strong>Genre:</strong> {{book.genre}}</p>
            <p><strong>Author:</strong> {{book.author}}</p>
            <p><strong>Language Written:</strong> {{book.language}}</p>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'BookList',
  props: {
    books: Array
  }
}
</script>

<style scoped>
.book-wrapper {
    display: flex;
    justify-content: center;
    border: 5px double #333;
}

.books {
    border: 3px double #333;
}

.book {
    display: flex;
    justify-content: space-around;
    margin-bottom: 50px;
}

.picture {
    display: flex;
    flex-direction: column;

}

.picture img {
    height: 250px;
    width: 200px;
    object-fit: cover;
}

.info {
    padding-top: 70px;
    text-align: left;
}
</style>
