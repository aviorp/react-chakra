
# Configure the AWS Provider
provider "aws" {
  region = var.aws_region
}

module "bucket" {
  source = "./modules/bucket"
  env = var.env
  project = var.project
  bucket_name = var.bucket_name
}

module "cloudfront" {
   source = "./modules/cloudfront"
   depends_on = [module.bucket]
    env = var.env
    project = var.project
    bucket_name = var.bucket_name
    aws_s3_bucket = module.bucket
}
