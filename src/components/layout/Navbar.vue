<template>
  <div class="NavBar container">
    <nav class="row px-4 px-sm-0" style="height: 84px">
      <div
        class="col-9 col-lg-6 d-flex align-items-center px-0 justify-content-sm-start"
      >
        <div class="d-flex align-items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-list text-black d-md-none d-inline"
            style="cursor: pointer"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
          <router-link class="navbar-brand" to="/">SHOP.CO</router-link>
        </div>
        <ul
          class="d-flex align-items-center justify-content-center gap-3 m-0 d-none d-md-flex"
        >
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/">Action</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Another action</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/"
                  >Something else here</router-link
                >
              </li>
            </ul>
          </li>
          <li>On Sale</li>
          <li>New Arrivals</li>
          <li>Brands</li>
        </ul>
      </div>

      <div
        class="col-3 px-0 col-lg-6 d-flex align-items-center justify-content-center"
      >
        <div
          class="search d-flex align-items-center justify-content-start gap-3 m-0 d-none d-lg-flex col-9"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="#00000066"
            viewBox="0 0 16 16"
            class="bi bi-search"
          >
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
            />
          </svg>
          <input type="search" placeholder="Search for products..." />
        </div>
        <div
          class="d-flex align-items-center justify-content-center gap-3 m-0 col-2"
        >
          <router-link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              class="bi bi-search text-black d-lg-none"
            >
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
              />
            </svg>
          </router-link>

          <router-link :to="{ name: 'Cart' }" class="position-relative">
            <div class="position-absolute Item-number">6</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-cart2 text-black"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
              />
            </svg>
          </router-link>
          <router-link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-person-circle text-black"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.NavBar {
  border-bottom: 2px solid #f2f0f1;
}
.icons {
  display: flex;
  gap: 8px;
}
.navbar-brand {
  font-family: "Protest Strike", sans-serif;
  font-weight: 400;
  font-size: 32px;
}
ul li,
.nav-link {
  font-size: 20px;
  cursor: pointer;
}
.search {
  background-color: #f0f0f0;
  padding: 10px 20px;
  border-radius: 50px;
}
.search input {
  border: none;
  background: none;
  outline: none;
  width: 100%;
}
.Item-number {
  background: red;
  color: white;
  text-align: center;
  border: none;
  border-radius: 50px;
  width: 22px;
  height: 22px;
  left: 8px;
  top: -10px;
  line-height: 20px;
}
</style>
