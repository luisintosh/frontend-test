export interface GiphySearchResult {
  data: Datum[];
  pagination: Pagination;
  meta: Meta;
}

export interface DownsizedLarge {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface FixedHeightSmallStill {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface Original {
  frames: string;
  hash: string;
  height: string;
  mp4: string;
  mp4_size: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface FixedHeightDownsampled {
  height: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface DownsizedStill {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface FixedHeightStill {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface DownsizedMedium {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface Downsized {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface PreviewWebp {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface OriginalMp4 {
  height: string;
  mp4: string;
  mp4_size: string;
  width: string;
}

export interface FixedHeightSmall {
  height: string;
  mp4: string;
  mp4_size: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface FixedHeight {
  height: string;
  mp4: string;
  mp4_size: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface DownsizedSmall {
  height: string;
  mp4: string;
  mp4_size: string;
  width: string;
}

export interface Preview {
  height: string;
  mp4: string;
  mp4_size: string;
  width: string;
}

export interface FixedWidthDownsampled {
  height: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface FixedWidthSmallStill {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface FixedWidthSmall {
  height: string;
  mp4: string;
  mp4_size: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface OriginalStill {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface FixedWidthStill {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface Looping {
  mp4: string;
  mp4_size: string;
}

export interface FixedWidth {
  height: string;
  mp4: string;
  mp4_size: string;
  size: string;
  url: string;
  webp: string;
  webp_size: string;
  width: string;
}

export interface PreviewGif {
  height: string;
  size: string;
  url: string;
  width: string;
}

export interface Images {
  downsized_large: DownsizedLarge;
  fixed_height_small_still: FixedHeightSmallStill;
  original: Original;
  fixed_height_downsampled: FixedHeightDownsampled;
  downsized_still: DownsizedStill;
  fixed_height_still: FixedHeightStill;
  downsized_medium: DownsizedMedium;
  downsized: Downsized;
  preview_webp: PreviewWebp;
  original_mp4: OriginalMp4;
  fixed_height_small: FixedHeightSmall;
  fixed_height: FixedHeight;
  downsized_small: DownsizedSmall;
  preview: Preview;
  fixed_width_downsampled: FixedWidthDownsampled;
  fixed_width_small_still: FixedWidthSmallStill;
  fixed_width_small: FixedWidthSmall;
  original_still: OriginalStill;
  fixed_width_still: FixedWidthStill;
  looping: Looping;
  fixed_width: FixedWidth;
  preview_gif: PreviewGif;
}

export interface Onload {
  url: string;
}

export interface Onclick {
  url: string;
}

export interface Onsent {
  url: string;
}

export interface Analytics {
  onload: Onload;
  onclick: Onclick;
  onsent: Onsent;
}

export interface Datum {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  analytics: Analytics;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}
