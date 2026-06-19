# SAA Compass

A local bilingual practice site built from the supplied SAA-C03 V29.35 English and Korean PDFs. The 880 paired questions are mapped to the four domains and 14 tasks in the supplied AWS SAA-C03 exam guide.

## Run

```powershell
node server.mjs
```

Open `http://127.0.0.1:4173`.

## Included behavior

- English/Korean question switching
- domain and task classification based on the SAA-C03 guide
- answer checking and explanations
- persistent wrong-answer review and favorites
- random 10-question sessions
- 65-question exam sessions using the official 30% / 26% / 24% / 20% weighting
- browser-local progress storage (no account or server database required)

## Study note

The supplied question files are third-party study material. Their answers and explanations are not endorsed by AWS and may age as services change. Use disputed items as prompts to verify against current AWS documentation. This project does not claim that any item will appear on a live exam.
