// s3Config.mjs
import { S3 } from 'aws-sdk';

const s3 = new S3({
	endpoint: process.env.LINODE_S3_ENDPOINT,
	accessKeyId: process.env.LINODE_S3_ACCESS_KEY,
	secretAccessKey: process.env.LINODE_S3_SECRET_KEY,
	s3ForcePathStyle: true,
	signatureVersion: 'v4',
});

export default s3;
