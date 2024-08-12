<template>
	<nav class="navbar navbar-expand-lg" aria-label="Navbar Main">
		<div class="container">
			<nuxt-link class="navbar-brand" to="/">
        <logo />
      </nuxt-link>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasNavbarLight"
				aria-controls="offcanvasNavbarLight"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div
				class="offcanvas offcanvas-end"
				tabindex="-1"
				id="offcanvasNavbarLight"
				aria-labelledby="offcanvasNavbarLightLabel"
			>
				<div class="offcanvas-header">
					<h5 class="offcanvas-title" id="offcanvasNavbarLightLabel">
						Offcanvas
					</h5>
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"
					></button>
				</div>
				<div class="offcanvas-body">
					<ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								href="#"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Dropdown
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="#">Action</a></li>
								<li><a class="dropdown-item" href="#">Another action</a></li>
								<li>
									<hr class="dropdown-divider" />
								</li>
								<li>
									<a class="dropdown-item" href="#">Something else here</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.navbar {
  .navbar-brand {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
</style>