<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
	xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
	xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
	xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
	xmlns:xs="http://www.w3.org/2001/XMLSchema"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xhtml="http://www.w3.org/1999/xhtml">
	<xsl:output method="html" indent="yes" encoding="UTF-8" />
	<xsl:template match="/">
		<xsl:variable name="sitemap_loc" select="sitemap:sitemapindex/sitemap:sitemap/sitemap:loc" />
        <xsl:variable
			name="sitemap_loc_slash" select="substring-after($sitemap_loc,'://')" />
        <xsl:variable
			name="url_loc" select="sitemap:urlset/sitemap:url/sitemap:loc" />
        <xsl:variable
			name="url_loc_slash" select="substring-after($url_loc,'://')" />
        <html>
			<head>
				<title>
					<xsl:choose>
						<xsl:when test="sitemap:sitemapindex/sitemap:sitemap/sitemap:loc">Indeks untuk <xsl:value-of
								select="substring-before($sitemap_loc_slash,'/')" />
						</xsl:when>
						<xsl:when
							test="sitemap:urlset/sitemap:url/sitemap:loc and substring-before($url_loc_slash,'/')!=''">Peta
		Situs untuk <xsl:value-of select="substring-before($url_loc_slash,'/')" />
						</xsl:when>
						<xsl:when test="sitemap:urlset/sitemap:url/sitemap:loc">Peta Situs untuk <xsl:value-of
								select="$url_loc_slash" />
						</xsl:when>
						<xsl:otherwise>Peta Situs</xsl:otherwise>
					</xsl:choose>
				</title>
				<meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
				<link rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
				<style>
					.bg-backdrop {
					background-color: rgba(255, 255, 255, .75);
					background: -webkit-linear-gradient(rgba(255,255,255,.75),rgba(255,255,255,1));
					background: -o-linear-gradient(rgba(255,255,255,.75),rgba(255,255,255,1));
					background: -moz-linear-gradient(rgba(255,255,255,.75),rgba(255,255,255,1));
					background: linear-gradient(rgba(255,255,255,.75),rgba(255,255,255,1));
		-webkit-backdrop-filter:blur(5px)
					}
					a.text-wrap {
					word-break: break-all
					}
					a:hover {
					text-decoration: none !important
					}
				</style>
			</head>
			<body>
				<div class="container-fluid fixed-top">
					<div class="row">
						<div class="bg-backdrop border border-top-0 border-right-0 border-left-0 col-12 px-0">
							<div class="container">
								<div class="no-gutters row">
									<div class="col-12">
										<nav class="bg-transparent breadcrumb font-weight-light h3 my-0 py-3 rounded-0">
											<a class="breadcrumb-item h3 text-decoration-none" href="/">
												<xsl:choose>
													<xsl:when test="sitemap:sitemapindex/sitemap:sitemap/sitemap:loc">Index
		untuk <xsl:value-of select="substring-before($sitemap_loc_slash,'/')" />
													</xsl:when>
													<xsl:when
														test="sitemap:urlset/sitemap:url/sitemap:loc and substring-before($url_loc_slash,'/')!=''">Peta
		Situs untuk <xsl:value-of select="substring-before($url_loc_slash,'/')" />
													</xsl:when>
													<xsl:when test="sitemap:urlset/sitemap:url/sitemap:loc">Peta Situs untuk <xsl:value-of
															select="$url_loc_slash" />
													</xsl:when>
													<xsl:otherwise>Peta Situs</xsl:otherwise>
												</xsl:choose>
											</a>
											<xsl:if test="sitemap:urlset/sitemap:url/xhtml:link">
												<span class="breadcrumb-item text-secondary">Tautan</span>
											</xsl:if>
											<xsl:if test="sitemap:urlset/sitemap:url/news:news">
												<span class="breadcrumb-item text-secondary">Berita</span>
											</xsl:if>
											<xsl:if test="sitemap:urlset/sitemap:url/image:image">
												<span class="breadcrumb-item text-secondary">Gambar</span>
											</xsl:if>
											<xsl:if test="sitemap:urlset/sitemap:url/video:video">
												<span class="breadcrumb-item text-secondary">Video</span>
											</xsl:if>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row no-gutters">
						<div class="col-12 mb-3 pt px-md-3">
							<h1 class="h3 my-0 pb-2 pt">
								<xsl:choose>
									<xsl:when test="count(sitemap:sitemapindex/sitemap:sitemap)&gt;0">Indeks ini
		memiliki <xsl:choose>
											<xsl:when test="count(sitemap:sitemapindex/sitemap:sitemap)&gt;1">
												<xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)" /> peta
		situs </xsl:when>
											<xsl:otherwise>satu peta situs</xsl:otherwise>
										</xsl:choose>
									</xsl:when>
									<xsl:when
										test="sitemap:sitemapindex and count(sitemap:sitemapindex/sitemap:sitemap)=0">Indeks
		ini kosong.</xsl:when>
									<xsl:when test="count(sitemap:urlset/sitemap:url)&gt;0">Peta Situs ini memiliki <xsl:value-of
											select="count(sitemap:urlset/sitemap:url)" /> tautan </xsl:when>
									<xsl:when test="sitemap:urlset and count(sitemap:urlset/sitemap:url)=0">Peta
		situs ini kosong.</xsl:when>
									<xsl:otherwise>Waduh! Peta Situs tidak lengkap.</xsl:otherwise>
								</xsl:choose>
							</h1>
							<xsl:apply-templates />
						</div>
					</div>
				</div>
				<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"></script>
				<script src="https://cdn.jsdelivr.net/npm/dayjs@1.10.4/dayjs.min.js"></script>
				<script src="https://cdn.jsdelivr.net/npm/dayjs@1.10.4/locale/id.js"></script> <!--
				Indonesian locale -->

				<script>
					$('a[href|="#alt"]').click(function (e) {
					e.preventDefault();
					$(this).next('div[id|="alt"]').toggle();
					});
					ch = $("nav:first").outerHeight(true);
					$(".mb").css("padding-bottom", ch + "px");
					$(".mt").css("margin-top", ch + "px");
					$(".pt").css("padding-top", ch + "px", "important");
					$(window).resize(function () {
					var ch = $("nav:first").outerHeight(true);
					$(".mb").css("padding-bottom", ch + "px");
					$(".mt").css("margin-top", ch + "px");
					$(".pt").css("padding-top", ch + "px", "important");
					});

					$(document).ready(function() {
					// Load Indonesian locale
					dayjs.locale('id');

					$('.date-row').each(function() {
					var dateText = $(this).text();
					var parsedDate = dayjs(dateText);

					if (parsedDate.isValid()) {
					var formattedDate = parsedDate.format('dddd, D MMMM YYYY HH:mm:ss [WIB]');
		$(this).text(formattedDate);
					} else {
					console.error("Invalid Date: " + dateText);
					// Optionally, handle the invalid date case here, e.g., set to a default date or leave
		unchanged
					}
					});
					});
				</script>
			</body>
		</html>
	</xsl:template>
	<xsl:template match="sitemap:sitemapindex">
		<div class="row">
			<div class="col-12 table-responsive">
				<xsl:choose>
					<xsl:when test="count(sitemap:sitemap)&gt;0">
						<table class="table table-striped">
							<thead>
								<tr>
									<th class="border-0" scope="col">#</th>
									<th class="border-0 text-left" scope="col">Peta Situs</th>
									<xsl:if test="sitemap:sitemap/sitemap:lastmod">
										<th class="border-0 text-left text-truncate" scope="col">Diperbaharui Pada</th>
									</xsl:if>
								</tr>
							</thead>
							<tbody>
								<xsl:for-each select="sitemap:sitemap">
									<tr>
										<xsl:variable name="sitemap_loc">
											<xsl:value-of select="sitemap:loc" />
										</xsl:variable>
										<xsl:variable name="sitemap_mod">
											<xsl:value-of select="sitemap:lastmod" />
										</xsl:variable>
										<xsl:variable name="sitemap_num">
											<xsl:value-of select="position()" />
										</xsl:variable>
										<th scope="row">
											<xsl:value-of select="$sitemap_num" />
										</th>
										<xsl:choose>
											<xsl:when test="$sitemap_mod!=''">
												<td class="text-monospace url">
													<a class="text-wrap" href="{$sitemap_loc}">
														<xsl:value-of select="$sitemap_loc" />
													</a>
												</td>
												<td
													class="text-sm-nowrap">
													<xsl:value-of
														select="concat(substring($sitemap_mod,0,11),concat(' ',substring($sitemap_mod,12,5)),concat(' ',substring($sitemap_mod,20,6)))" />
												</td>
											</xsl:when>
											<xsl:otherwise>
												<td class="text-monospace" colspan="2">
													<a class="text-wrap" href="{$sitemap_loc}">
														<xsl:value-of select="$sitemap_loc" />
													</a>
												</td>
											</xsl:otherwise>
										</xsl:choose>
									</tr>
								</xsl:for-each>
							</tbody>
						</table>
					</xsl:when>
					<xsl:otherwise></xsl:otherwise>
				</xsl:choose>
			</div>
		</div>
	</xsl:template>
	<xsl:template match="sitemap:urlset">
		<div class="">
			<div class="table-responsive">
				<xsl:choose>
					<xsl:when test="count(sitemap:url)&gt;0">
						<table class="table table-striped">
							<thead>
								<tr>
									<th class="border-0" scope="col">#</th>
									<th class="border-0 text-left w-50" scope="col">Lokasi</th>
									<xsl:if test="sitemap:url/sitemap:changefreq">
										<th class="border-0 text-left text-truncate" scope="col">Frekuensi</th>
									</xsl:if>
									<xsl:if test="sitemap:url/sitemap:lastmod">
										<th class="border-0 text-left text-truncate" scope="col">Diubah Pada</th>
									</xsl:if>
									<xsl:if test="sitemap:url/sitemap:priority">
										<th class="border-0 text-left text-truncate" scope="col">Prioritas</th>
									</xsl:if>
								</tr>
							</thead>
							<tbody>
								<xsl:for-each select="sitemap:url">
									<tr>
										<xsl:variable name="url_num">
											<xsl:value-of select="position()" />
										</xsl:variable>
										<xsl:variable name="url_freq">
											<xsl:value-of select="sitemap:changefreq" />
										</xsl:variable>
										<xsl:variable name="url_mod">
											<xsl:value-of select="sitemap:lastmod" />
										</xsl:variable>
										<xsl:variable name="url_loc">
											<xsl:value-of select="sitemap:loc" />
										</xsl:variable>
										<xsl:variable name="url_prio">
											<xsl:value-of select="sitemap:priority" />
										</xsl:variable>
										<xsl:variable
											name="url_col_loc">
											<!--xsl:choose><xsl:when
											test="$url_freq='' and $url_mod='' and $url_prio=''"><xsl:value-of
                                            											select="4"/></xsl:when><xsl:when test="$url_freq!='' and $url_mod='' and
											$url_prio=''"><xsl:value-of
                                            											select="3"/></xsl:when><xsl:when test="$url_freq='' and $url_mod!='' and
											$url_prio!=''"><xsl:value-of
                                            											select="3"/></xsl:when><xsl:when test="$url_freq='' and $url_mod='' and
											$url_prio!=''"><xsl:value-of
                                            											select="3"/></xsl:when><xsl:otherwise><xsl:value-of select="'1'"/></xsl:otherwise></xsl:choose-->
                                            <xsl:value-of select="'1'" />
										</xsl:variable>
										<th scope="row">
											<xsl:value-of select="$url_num" />
										</th>
										<td colspan="{$url_col_loc}" class="url text-truncate w-50" nowrap="nowrap">
											<a class="text-decoration-none font-monospace" href="{$url_loc}">
												<xsl:value-of select="$url_loc" />
											</a>
											<xsl:if test="xhtml:link">
												<a class="mx-sm-1 text-decoration-none font-monospace mx-md-2 text-muted" data-toggle="collapse"
													href="#alt-{$url_num}" role="button" aria-expanded="false"
													aria-controls="alt-{$url_num}">↴</a>
                                                <div
													aria-labelledby="heading{$url_num}" class="collapse m-0 p-0"
													data-parent="#accordion" id="alt-{$url_num}">
													<xsl:apply-templates select="xhtml:link" />
												</div>
											</xsl:if>
										</td>
										<td>
											<xsl:choose>
												<xsl:when test="$url_freq = 'daily'">
													<span class="badge bg-primary">Harian</span>
												</xsl:when>
												<xsl:when test="$url_freq = 'weekly'">
													<span class="badge bg-info">Mingguan</span>
												</xsl:when>
												<xsl:when test="$url_freq = 'monthly'">
													<span class="badge bg-success">Bulanan</span>
												</xsl:when>
												<xsl:when test="$url_freq = 'yearly'">
													<span class="badge bg-dark">Tahunan</span>
												</xsl:when>
												<xsl:otherwise>
													<span class="badge bg-default">Tidak Ditentukan</span>
												</xsl:otherwise>
											</xsl:choose>
										</td>
										<td class="date-row">
											<xsl:value-of select="$url_mod" />
										</td>
										<td>
											<xsl:value-of select="$url_prio" />
										</td>
									</tr>
								</xsl:for-each>
							</tbody>
						</table>
					</xsl:when>
					<xsl:otherwise></xsl:otherwise>
				</xsl:choose>
			</div>
		</div>
	</xsl:template>
	<xsl:template match="xhtml:link">
		<p class="mb-0">
			<xsl:if test="@hreflang">
				<span class="badge badge-primary float-right ml-3 ml-sm-0 rounded-0 small">
					<xsl:value-of select="@hreflang" />
				</span>
			</xsl:if>
			<xsl:if test="@rel">
				<span class="badge badge-light d-none d-sm-block float-right ml-3 rounded-0 small">
					<xsl:value-of select="@rel" />
				</span>
			</xsl:if>
			<xsl:variable name="url_loc_alt">
				<xsl:value-of select="@href" />
			</xsl:variable>
			<a class="text-muted text-wrap" href="{$url_loc_alt}">
				<xsl:value-of select="@href" />
			</a>
			<xsl:if test="@media">
				<span class="badge badge-warning ml-3 rounded-0">
					<xsl:value-of select="@media" />
				</span>
			</xsl:if>
		</p>
        <xsl:apply-templates />
	</xsl:template>
	<xsl:template match="image:image">
		<xsl:variable name="loc">
			<xsl:value-of select="image:loc" />
		</xsl:variable>
        <p>
			<strong>Image:
			</strong>
			<a href="{$loc}">
				<xsl:value-of select="image:loc" />
			</a>
			<xsl:if test="image:caption">
				<span>
					<xsl:value-of select="image:caption" />
				</span>
			</xsl:if>
			<xsl:apply-templates />
		</p>
	</xsl:template>
	<xsl:template match="video:video">
		<xsl:variable name="loc">
			<xsl:choose>
				<xsl:when test="video:player_loc!=''">
					<xsl:value-of select="video:player_loc" />
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="video:content_loc" />
				</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
        <xsl:variable
			name="thumb_loc">
			<xsl:value-of select="video:thumbnail_loc" />
		</xsl:variable>
        <p>
			<strong>Video:
			</strong>
			<a href="{$loc}" class="mr2 link blue">
				<xsl:choose>
					<xsl:when test="video:player_loc!=''">
						<xsl:value-of select="video:player_loc" />
					</xsl:when>
					<xsl:otherwise>
						<xsl:value-of select="video:content_loc" />
					</xsl:otherwise>
				</xsl:choose>
			</a>
			<a href="{$thumb_loc}">thumb</a>
			<xsl:if test="video:title">
				<span>
					<xsl:value-of select="video:title" />
				</span>
			</xsl:if>
			<xsl:apply-templates />
		</p>
	</xsl:template>
</xsl:stylesheet>