import {CliInternals} from '@remotion/cli';
import type {LogLevel} from '@remotion/renderer';
import {BINARY_NAME} from '../../../shared/constants';
import {quit} from '../../helpers/quit';
import {Log} from '../../log';
import {roleSubcommand, ROLE_SUBCOMMAND} from './role';
import {userSubcommand, USER_SUBCOMMAND} from './user';
import {validateSubcommand, VALIDATE_SUBCOMMAND} from './validate';

export const POLICIES_COMMAND = 'policies';

const printPoliciesHelp = (logLevel: LogLevel) => {
	Log.infoAdvanced(
		{indent: false, logLevel},
		`${BINARY_NAME} ${POLICIES_COMMAND} <subcommand>`,
	);
	Log.infoAdvanced({indent: false, logLevel});
	Log.infoAdvanced({indent: false, logLevel}, 'Available subcommands:');
	Log.infoAdvanced({indent: false, logLevel}, '');
	Log.infoAdvanced(
		{indent: false, logLevel},
		`${BINARY_NAME} ${POLICIES_COMMAND} ${USER_SUBCOMMAND}`,
	);
	Log.infoAdvanced(
		{indent: false, logLevel},
		CliInternals.chalk.gray(
			'Print the suggested policy to be applied to the user that is attached to the access token.',
		),
	);
	Log.infoAdvanced({indent: false, logLevel});
	Log.infoAdvanced(
		{indent: false, logLevel},
		`${BINARY_NAME} ${POLICIES_COMMAND} ${ROLE_SUBCOMMAND}`,
	);
	Log.infoAdvanced(
		{indent: false, logLevel},
		CliInternals.chalk.gray(
			'Print the suggested policy to be applied to the role that is attached to the lambda function.',
		),
	);
	Log.infoAdvanced({indent: false, logLevel});
	Log.infoAdvanced(
		{indent: false, logLevel},
		`${BINARY_NAME} ${POLICIES_COMMAND} ${VALIDATE_SUBCOMMAND}`,
	);
	Log.infoAdvanced(
		{indent: false, logLevel},
		CliInternals.chalk.gray(
			'Validate the current policies setup is correct by running tests using the AWS policy simulator.',
		),
	);
};

export const policiesCommand = (args: string[], logLevel: LogLevel) => {
	if (args[0] === USER_SUBCOMMAND) {
		return userSubcommand(logLevel);
	}

	if (args[0] === ROLE_SUBCOMMAND) {
		return roleSubcommand(logLevel);
	}

	if (args[0] === VALIDATE_SUBCOMMAND) {
		return validateSubcommand(logLevel);
	}

	if (args[0]) {
		Log.error({indent: false, logLevel}, `Subcommand ${args[0]} not found.`);
		printPoliciesHelp(logLevel);
		quit(1);
	}

	printPoliciesHelp(logLevel);
};
