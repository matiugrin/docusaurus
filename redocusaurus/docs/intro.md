---
sidebar_position: 1
slug: /
---

# Welcome To The OpsAdmin API Reference

:::info

The OpsAdmin API is still under heavy development, this documentation is a work in progress.

:::

## Introduction

OpsAdmin is an online software application that creates efficiencies for retail energy suppliers with its marketing, operations, and regulatory-centric tools.

This software is implemented by different retail companies and each one has its own API domain, set of credentials and permission access to certain API methods that will be provided when the participating retail companies start working in the integration.

Since each retail company has its own API domain, a generic one will be shown in the examples throughout the documentation.

It's possible to test the API and see the details of every endpoint (even the ones still not documented here) by accessing the url https://$HOSTNAME/Swagger/index.html

### What's New?

When new features are added to the API is recomended to contact the Retail Energy Company to confirm if any of the new features are going to be used or changed. Usually the these new features and parameters are incorporated in OpsAdmin maintaining the existing system functionality, meaning that if they are not changed, the system will continue operating as before the update. 

If an agent changes the configuration, some endpoints of the API may start failing if the new validations are not met and will require the API user to adapt their applications.

### Release 2023-11
- This is a test post [Using a Batch File](http://localhost:3000/).

### Release 2023-10
- Now it's possible to post payment and credit card information using a batch file, see [Using a Batch File](http://localhost:3000/).

### Release 2023-09
- The [#Get Plans Batch For Wizard](http://localhost:3000/) endpoint no longer allows requesting plans without indicating at least one utility.

### Release 2023-08
The following properties were added to the [#Get extended information for a single plan](http://localhost:3000/) endpoint:
- Added new `general_rules` to the plan information: `allow_bypass_credit_check` and `allow_use_date_of_birth` for the credit check process.
- Added `available_from_date` and `available_until_date` properties to the plan information for plans that need to limit their contract dates to a certain future range.
- Added `min_start_date_delay_days` property to the plan information for plans that should have their contract start date delayed for a certain number of days in the future.

### Release 2023-06
- Added display properties to plan documents. See the [#Get Plan Documents](/api#tag/Plans/paths/~1api~1v1~1plans~1docs~1%7BplanId%7D/get) endpoint for details.

### Release 2023-05
- Added property `customer.opted_marketing_coms` to the [#Create a new enrollment](/api#tag/Enrollments/paths/~1api~1v1~1enrollments~1create/post) endpoint.
