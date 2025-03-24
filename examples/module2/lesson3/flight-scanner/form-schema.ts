import { z } from 'zod';

const errorMessages = {
  startLocalizationAlwaysFilledInfo: (char: number) =>
    `Lokalizacja startowa musi miec przynajmniej ${char} znaków`,
  destationLocalizationAlwaysFilledInfo: (char: number) =>
    `Lokalizacja końcowa musi miec przynajmniej ${char} znaków`,
  startDateFormatInfo:
    'Data poczatkowa musi być w poprawnym formacie DD-MM-YYYY',
  endDateFormatInfo: 'Data koncowa musi być w poprawnym formacie DD-MM-YYYY',
  typeOfJourneyInfo:
    'Typ podróży (w jedną stronę lub powrót) musi być jedną z dwóch oczekiwanych wartości',
  endDateRequired: 'End date is required',
};

export const TravelFormSchema = z
  .object({
    origin: z
      .string()
      .min(2, { message: errorMessages.startLocalizationAlwaysFilledInfo(2) }),
    destination: z
      .string()
      .min(2, {
        message: errorMessages.destationLocalizationAlwaysFilledInfo(2),
      }),
    trip: z.enum(['one-way', 'round-trip']),
    startDate: z.string().regex(/^\d{2}-\d{2}-\d{4}$/, {
      message: errorMessages.startDateFormatInfo,
    }),
    endDate: z.string().optional(),
  })
  .superRefine((val, ctx) => {
    if (val.trip === 'round-trip') {
      if (val.endDate === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: errorMessages.endDateRequired,
        });
      }

      if (val.endDate && !val.endDate?.match(/^\d{2}-\d{2}-\d{4}$/)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: errorMessages.endDateFormatInfo,
        });
      }
    }
  });

export type FormDataType = z.infer<typeof TravelFormSchema>;
