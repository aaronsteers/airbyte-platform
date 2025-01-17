export const enum Namespace {
  SOURCE = "Source",
  DESTINATION = "Destination",
  CONNECTION = "Connection",
  CONNECTOR = "Connector",
  ONBOARDING = "Onboarding",
  USER = "User",
  CREDITS = "Credits",
  CONNECTOR_BUILDER = "ConnectorBuilder",
  SCHEMA = "Schema",
  ERD = "ERD",
}

export const enum Action {
  CREATE = "Create",
  TEST = "Test",
  SELECT = "Select",
  SUCCESS = "TestSuccess",
  FAILURE = "TestFailure",
  FREQUENCY = "FrequencySet",
  SYNC = "FullRefreshSync",
  EDIT_SCHEMA = "EditSchema",
  DISABLE = "Disable",
  REENABLE = "Reenable",
  DELETE = "Delete",
  REQUEST = "Request",
  SKIP = "Skip",
  PREFERENCES = "Preferences",
  NO_MATCHING_CONNECTOR = "NoMatchingConnector",
  SELECTION_OPENED = "SelectionOpened",
  CHECKOUT_START = "CheckoutStart",
  LOAD_MORE_JOBS = "LoadMoreJobs",
  INVITE = "Invite",
  OAUTH_ATTEMPT = "OAuthAttempt",
  OAUTH_SUCCESS = "OAuthSuccess",

  // Connector Builder Actions
  CONNECTOR_BUILDER_START = "ConnectorBuilderStart",
  CONNECTOR_BUILDER_EDIT = "ConnectorBuilderEdit",
  API_URL_CREATE = "ApiUrlCreated",
  AUTHENTICATION_METHOD_SELECT = "AuthenticationMethodSelect",
  GLOBAL_CONFIGURATION_SELECT = "GlobalConfigurationSelect",
  USER_INPUTS_SELECT = "UserInputsSelect",
  USER_INPUT_CREATE = "UserInputCreate",
  USER_INPUT_EDIT = "UserInputEdit",
  USER_INPUT_DELETE = "UserInputDelete",
  STREAM_SELECT = "StreamSelect",
  STREAM_CREATE = "StreamCreate",
  STREAM_COPY = "StreamCopy",
  STREAM_DELETE = "StreamDelete",
  STREAM_TEST = "StreamTest",
  STREAM_TEST_SUCCESS = "StreamTestSuccess",
  STREAM_TEST_FAILURE = "StreamTestFailure",
  RESET_ALL = "ResetAll",
  DOWNLOAD_YAML = "DownloadYaml",
  TOGGLE_UI_YAML = "ToggleUiYaml",
  YAML_TO_UI_CONVERSION_FAILURE = "YamlToUiConversionFailure",
  DISCARD_YAML_CHANGES = "DiscardYamlChanges",
  OVERWRITE_SCHEMA = "OverwriteSchema",
  MERGE_SCHEMA = "MergeSchema",
  UI_INCOMPATIBLE_YAML_IMPORTED = "UiIncompatibleYamlImported",
  UI_COMPATIBLE_YAML_IMPORTED = "UiCompatibleYamlImported",
  INVALID_YAML_UPLOADED = "InvalidYamlUploaded",
  START_FROM_SCRATCH = "StartFromScratch",
  CHANGE_PROJECT_VERSION = "ChangeProjectVersion",
  PUBLISH_PROJECT = "PublishProject",
  RELEASE_NEW_PROJECT_VERSION = "ReleaseNewProjectVersion",
  CONNECTOR_BUILDER_DELETE = "ConnectorBuilderDelete",
}

export type EventParams = Record<string, unknown>;
