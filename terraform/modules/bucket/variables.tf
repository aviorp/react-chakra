# Tags
variable "project" {
  type        = string
  description = "The name of the project"
  
}
variable "createdBy" {
  type        = string
  description = "The name of the person who created the project"
  default     = "Terraform"

}

# General
variable "bucket_name" {
  type        = string
  description = "The name of the S3 bucket"
}

variable "env" {
  type        = string
  description = "The environment to deploy to"
}


data "aws_iam_policy_document" "bucket_policy" {
  statement {
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
    sid    = "PublicReadGetObject"
    effect = "Allow"
    actions = [
      "s3:GetObject",
    ]
    resources = [
      "arn:aws:s3:::${var.bucket_name}/*",
    ]
  }
}
