variable "aws_region" {
  type        = string
  description = "The AWS region to deploy to"
  default     = "us-east-1"
}

variable "env" {
  type        = string
  description = "The environment to deploy to"
}

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

variable "bucket_name" {
  type        = string
  description = "The name of the S3 bucket"
}