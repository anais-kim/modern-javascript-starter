import sinon from "sinon";
import {expect} from 'chai';
import {handleResponse} from "../../src/services/response-handler";

describe('ResponseHandler', () => {
    describe('#handleResponse', () => {
        it('should return json response body when status is okay', () => {
            const response = {
                ok: true,
                json: () => {
                    return {key: 'value'}
                }
            };
            const result = handleResponse(response);

            expect(result).to.deep.equal({key: 'value'});
        });

        it('should log response when status is not okay', () => {
            const spyLog = sinon.spy(console, 'log');
            const response = {ok: false};

            handleResponse(response);

            expect(spyLog.calledWith(response)).to.be.true;
        });
    })
});