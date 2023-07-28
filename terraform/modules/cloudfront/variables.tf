
variable "bucket_name" {
  type        = string
  description = "The name of the S3 bucket"
  
}

variable "aws_s3_bucket" {
  type        = any
  description = "The name of the S3 bucket"
}

variable "env" {
  type        = string
  description = "The environment to deploy to"
}

variable "project" {
  type        = string
  description = "The name of the project"
  
}