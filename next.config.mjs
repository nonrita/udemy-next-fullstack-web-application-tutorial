/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};

export default nextConfig;

/**
 *logging: {
 * fetches: {
 *   fullUrl: true
 * }
 *}
 *このような設定をすることで、データ取得時にキャッシュをヒットしたかどうか確認することができます
 */