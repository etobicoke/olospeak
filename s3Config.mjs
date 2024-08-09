import { S3 } from 'aws-sdk';

/**
 * Initializes an S3 client instance configured to interact with a Linode S3-compatible service.
 *
 * This configuration allows you to interact with Linode's object storage service using the AWS SDK for JavaScript.
 * The configuration is done through environment variables for better security and flexibility.
 *
 * @constant {S3} s3 - An instance of the S3 client, configured to interact with a Linode S3-compatible service.
 * @property {string} endpoint - The endpoint URL for the Linode S3 service, provided by the environment variable `LINODE_S3_ENDPOINT`.
 * @property {string} accessKeyId - The access key ID for your Linode S3 service, provided by the environment variable `LINODE_S3_ACCESS_KEY`.
 * @property {string} secretAccessKey - The secret access key for your Linode S3 service, provided by the environment variable `LINODE_S3_SECRET_KEY`.
 * @property {boolean} s3ForcePathStyle - Ensures that path-style URLs are used instead of subdomain-style, necessary for compatibility with Linode's S3 service.
 * @property {string} signatureVersion - Specifies the version of the signature algorithm to be used, 'v4' is required for Linode's S3 service.
 *
 * @example
 * import s3 from './s3-config';
 *
 * // Example usage: Upload a file to a bucket
 * const params = {
 *   Bucket: 'my-bucket',
 *   Key: 'my-object-key',
 *   Body: 'Hello, world!',
 * };
 *
 * s3.upload(params, (err, data) => {
 *   if (err) {
 *     console.log('Error', err);
 *   } else {
 *     console.log('Upload Success', data.Location);
 *   }
 * });
 */

const s3 = new S3({
	endpoint: process.env.LINODE_S3_ENDPOINT,
	accessKeyId: process.env.LINODE_S3_ACCESS_KEY,
	secretAccessKey: process.env.LINODE_S3_SECRET_KEY,
	s3ForcePathStyle: true,
	signatureVersion: 'v4',
});

export default s3;
