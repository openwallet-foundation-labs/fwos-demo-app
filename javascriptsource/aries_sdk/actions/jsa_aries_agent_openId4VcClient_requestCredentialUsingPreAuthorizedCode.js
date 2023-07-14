// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
import support from "../support/entidad";
//import { OpenId4VpClientService, OpenIdCredentialFormatProfile } from '@internal/openid4vc-client'
// END EXTRA CODE

/**
 * https://github.com/hyperledger/aries-framework-javascript/tree/002be4f578729aed1c8ae337f3d2eeecce9e3725/packages/openid4vc-client
 * 
 * https://github.com/hyperledger/aries-framework-javascript/blob/002be4f578729aed1c8ae337f3d2eeecce9e3725/packages/openid4vc-client/src/OpenId4VcClientApi.ts#L26
 * 
 * 
 *   public async requestCredentialUsingPreAuthorizedCode(
 *     options: PreAuthCodeFlowOptions
 *   ): Promise<W3cCredentialRecord[]> {
 *     // set defaults
 *     const verifyRevocationState = options.verifyCredentialStatus ?? true
 * 
 *     return this.openId4VcClientService.requestCredential(this.agentContext, {
 *       ...options,
 *       verifyCredentialStatus: verifyRevocationState,
 *       flowType: AuthFlowType.PreAuthorizedCodeFlow,
 *     })
 *   }
 * 
 * 
 * https://github.com/hyperledger/aries-framework-javascript/blob/002be4f578729aed1c8ae337f3d2eeecce9e3725/packages/openid4vc-client/src/OpenId4VcClientServiceOptions.ts#L14
 * 
 * 
 * /////
 *  // Options that are used for the pre-authorized code flow.
 *  ///
 * export interface PreAuthCodeFlowOptions {
 *   issuerUri: string
 *   verifyCredentialStatus: boolean
 * 
 *   /////
 *    // A list of allowed credential formats in order of preference.
 *    //
 *    // If the issuer supports one of the allowed formats, that first format that is supported
 *    // from the list will be used.
 *    //
 *    // If the issuer doesn't support any of the allowed formats, an error is thrown
 *    // and the request is aborted.
 *    ///
 *   allowedCredentialFormats?: SupportedCredentialFormats[]
 * 
 *   /////
 *    // A list of allowed proof of possession signature algorithms in order of preference.
 *    //
 *    // Note that the signature algorithms must be supported by the wallet implementation.
 *    // Signature algorithms that are not supported by the wallet will be ignored.
 *    //
 *    // The proof of possession (pop) signature algorithm is used in the credential request
 *    // to bind the credential to a did. In most cases the JWA signature algorithm
 *    // that is used in the pop will determine the cryptographic suite that is used
 *    // for signing the credential, but this not a requirement for the spec. E.g. if the
 *    // pop uses EdDsa, the credential will most commonly also use EdDsa, or Ed25519Signature2018/2020.
 *    ///
 *   allowedProofOfPossessionSignatureAlgorithms?: JwaSignatureAlgorithm[]
 * 
 *   /////
 *    // A function that should resolve a verification method based on the options passed.
 *    // This method will be called once for each of the credentials that are included
 *    // in the credential offer.
 *    //
 *    // Based on the credential format, JWA signature algorithm, verification method types
 *    // and did methods, the resolver must return a verification method that will be used
 *    // for the proof of possession signature.
 *    ///
 *   proofOfPossessionVerificationMethodResolver: ProofOfPossessionVerificationMethodResolver
 * }
 * @param {string} agent_key
 * @param {string} issuerUri - mandatory: string
 * @param {boolean} verifyCredentialStatus - mandatory: boolean
 * @param {string} allowedCredentialFormats - optional SupportedCredentialFormats[]
 * @param {string} allowedProofOfPossessionSignatureAlgorithms - optional: JwaSignatureAlgorithm[]
 * @param {string} proofOfPossessionVerificationMethodResolver - mandatory: ProofOfPossessionVerificationMethodResolver
 * @returns {Promise.<string>}
 */
export async function jsa_aries_agent_openId4VcClient_requestCredentialUsingPreAuthorizedCode(agent_key, issuerUri, verifyCredentialStatus, allowedCredentialFormats, allowedProofOfPossessionSignatureAlgorithms, proofOfPossessionVerificationMethodResolver) {
	// BEGIN USER CODE
	try{
		if(agent_key==null)return Promise.reject("Invalid agent_key parameter");							//mandatory
		if(domain==null)return Promise.reject("Invalid domain parameter");									//mandatory
		if(label==null);/*return Promise.reject("Invalid label parameter");*/								//optional
		if(alias==null);/*return Promise.reject("Invalid alias parameter");*/								//optional
		if(imageUrl==null);/*return Promise.reject("Invalid imageUrl parameter");*/							//optional
		if(goalCode==null);/*return Promise.reject("Invalid goalCode parameter");*/							//optional
		if(goal==null);/*return Promise.reject("Invalid goal parameter");*/									//optional
		if(handshake==null);/*return Promise.reject("Invalid handshake parameter");*/						//optional
		if(handshakeProtocols==null);/*return Promise.reject("Invalid handshakeProtocols parameter");*/		//optional
		if(messages==null);/*return Promise.reject("Invalid messages parameter");*/							//optional
		if(multiUseInvitation==null);/*return Promise.reject("Invalid multiUseInvitation parameter");*/		//optional
		if(autoAcceptConnection==null);/*return Promise.reject("Invalid autoAcceptConnection parameter");*/	//optional
		if(routing==null);/*return Promise.reject("Invalid routing parameter");*/							//optional
		if(appendedAttachments==null);/*return Promise.reject("Invalid appendedAttachments parameter");*/	//optional
		let agent=support.cache.get(agent_key);
		if(agent==null)return Promise.reject("Agent not found in cache");
		let createInvitationConfig={};
		if(label!=null&&label!="")createInvitationConfig.label=label;
		if(alias!=null&&alias!="")createInvitationConfig.alias=alias;
		if(imageUrl!=null&&imageUrl!="")createInvitationConfig.imageUrl=imageUrl;
		if(goalCode!=null&&goalCode!="")createInvitationConfig.goalCode=goalCode;
		//boolean
		if(goal!=null&&goal!="")createInvitationConfig.goal=goal;
		if(handshake==true/*false?*/)createInvitationConfig.handshake=handshake;
		//  handshakeProtocols?: HandshakeProtocol[]
		if(handshakeProtocols!=null||handshakeProtocols=="")createInvitationConfig.handshakeProtocols=handshakeProtocols;
		//  messages?: AgentMessage[]
		if(messages!=null&&messages!="")createInvitationConfig.messages=messages;
		//boolean
		if(multiUseInvitation==true/*false?*/)createInvitationConfig.multiUseInvitation=multiUseInvitation;
		//boolean
		if(autoAcceptConnection==true/*false?*/)createInvitationConfig.autoAcceptConnection=autoAcceptConnection;
		//  routing?: Routing
		if(routing!=null&&routing!="")createInvitationConfig.routing=routing;
		//  appendedAttachments?: Attachment[]
		if(appendedAttachments!=null&&appendedAttachments!="")createInvitationConfig.appendedAttachments=appendedAttachments;
		let outOfBandRecord=null;
		if(Object.keys(createInvitationConfig).length==0){
			outOfBandRecord=await agent.oob.createInvitation();
		}else{
			outOfBandRecord=await agent.oob.createInvitation(createInvitationConfig);
		}
		//outOfBandRecord=await agent.oob.createInvitation();
		let ret={
			invitationUrl:outOfBandRecord.outOfBandInvitation.toUrl({domain:domain}),
			outOfBandRecord,
		};
		return Promise.resolve(JSON.stringify(ret,0,2));
	}catch(e){
		return Promise.reject(e.toString());
	}
	// END USER CODE
}
