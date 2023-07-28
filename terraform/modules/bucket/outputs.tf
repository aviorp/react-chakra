output "policy" {
  value = data.aws_iam_policy_document.bucket_policy.json
}

output "bucket" {
  value = aws_s3_bucket.bucket
}